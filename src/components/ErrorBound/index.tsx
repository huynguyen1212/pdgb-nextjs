/**
 *
 * ErrorBound
 *
 */
import React, { ErrorInfo } from "react";

interface Props {}

interface State {
  hasError: boolean;
}

class ErrorBound extends React.Component<any, State> {
  constructor(props:any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    console.log("Error Boundry", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log("Error Boundry", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <span>Error Boundry</span>;
    }

    return this.props.children;
  }
}

export default ErrorBound;
