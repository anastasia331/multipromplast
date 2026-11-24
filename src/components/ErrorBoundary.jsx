import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null, mountKey: 0 };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState((prev) => ({
      hasError: false,
      error: null,
      mountKey: prev.mountKey + 1,
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center text-center p-6 sm:p-8">
          <div className="max-w-md">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Произошла ошибка при загрузке страницы
            </h2>
            <p className="text-slate-600 mb-6">
              Не удалось отобразить содержимое страницы. Попробуйте ещё раз.
            </p>
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-700 text-white font-semibold transition hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-orange-500 focus-visible:outline-offset-2"
            >
              Повторить загрузку
            </button>
          </div>
        </div>
      );
    }

    return <div key={this.state.mountKey} style={{ display: 'contents' }}>
      {this.props.children}
    </div>;
  }
}
