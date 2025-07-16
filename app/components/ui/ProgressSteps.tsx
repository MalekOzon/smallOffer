import React from "react";

interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({
  currentStep,
  totalSteps,
}) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center w-full mt-2  ">
      <div className="flex items-center justify-between w-full">
        {steps.map((step) => (
          <React.Fragment key={step}>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                step <= currentStep ? "border-cgreen  border-4" : "bg-gray-300"
              }`}
            >
              {step <= currentStep && (
                <span className="text-white text-xs"></span>
              )}
            </div>
            {step < totalSteps && (
              <div
                className={`flex-1 h-1  mx-2 ${
                  step < currentStep
                  ? "bg-cgreen  "
                  : "bg-clightgray"
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
