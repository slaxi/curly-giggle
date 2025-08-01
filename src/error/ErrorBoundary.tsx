import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';
import { TbFaceIdError } from 'react-icons/tb';

type TErrorBoundaryProps = {
  children?: ReactNode;
  fallback?: ReactNode;
};

type TState = {
  hasError: boolean;
};

class ErrorBoundaryComponent extends Component<TErrorBoundaryProps, TState> {
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }
  public static getDerivedStateFromError(_: Error): TState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div>
            <TbFaceIdError style={{ fontSize: '6rem' }} />
            <h1>Sorry.. there was an error</h1>
          </div>
        )
      );
    }

    return this.props.children;
  }
  public state: TState = {
    hasError: false,
  };
}

export default ErrorBoundaryComponent;
