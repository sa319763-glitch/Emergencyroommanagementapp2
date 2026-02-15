import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ShieldCheck, RefreshCw } from 'lucide-react';
import { Button } from '../ui/button';
import { Screen } from '../../App';
import sahelLogo from 'figma:asset/b6b82356c56afc4d51279aff1309cadb8de167eb.png';

interface OTPVerificationProps {
  navigate: (screen: Screen) => void;
}

export default function OTPVerification({ navigate }: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);
    
    // Focus last filled input
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('patient-dashboard');
    }, 1500);
  };

  const handleResend = () => {
    setCanResend(false);
    setTimer(300);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50 pb-6">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <button 
          onClick={() => navigate('forgot-password')} 
          className="text-teal-600 hover:bg-teal-50 rounded-lg p-2 transition-colors active:scale-95"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="px-4 sm:px-6 py-4 max-w-md mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={sahelLogo} alt="Sahel Logo" className="w-20 h-20" />
        </div>
        
        {/* Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-teal-100 rounded-full p-4">
              <ShieldCheck className="w-8 h-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-slate-900 mb-2">Verify OTP</h1>
          <p className="text-slate-600 text-sm">
            Enter the 6-digit code sent to <br />
            <span className="text-slate-900">+966 5X XXX XXXX</span>
          </p>
        </div>

        {/* OTP Input Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="space-y-6">
            {/* OTP Inputs */}
            <div className="flex gap-2 sm:gap-3 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-12 h-14 sm:w-14 sm:h-16 text-center border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors text-slate-900"
                  autoFocus={index === 0}
                />
              ))}
            </div>

            {/* Timer */}
            <div className="text-center">
              {timer > 0 ? (
                <p className="text-sm text-slate-600">
                  Code expires in <span className="text-teal-600">{formatTime(timer)}</span>
                </p>
              ) : (
                <p className="text-sm text-red-600">
                  Code expired. Please request a new one.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Verify Button */}
        <Button 
          onClick={handleVerify}
          disabled={!isComplete || isLoading || timer === 0}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-14 disabled:bg-slate-300 disabled:opacity-50 active:scale-98 transition-transform mb-4"
        >
          {isLoading ? 'Verifying...' : 'Verify & Sign In'}
        </Button>

        {/* Resend Button */}
        <Button 
          onClick={handleResend}
          disabled={!canResend}
          variant="outline"
          className="w-full rounded-full h-12 border-teal-300 text-teal-600 hover:bg-teal-50 disabled:opacity-50"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Resend Code
        </Button>

        {/* Info Box */}
        <div className="mt-6 bg-teal-50 border border-teal-200 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="w-1 bg-teal-500 rounded-full flex-shrink-0" />
            <div>
              <h4 className="text-slate-900 text-sm mb-1">Didn't receive the code?</h4>
              <p className="text-slate-600 text-xs">
                Check your messages or wait {formatTime(timer)} to request a new code.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Login */}
        <div className="text-center mt-6">
          <button 
            onClick={() => navigate('patient-login')}
            className="text-teal-600 text-sm hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
