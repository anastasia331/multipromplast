export default function RouteLoadError() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center p-6 sm:p-8">
      <div className="max-w-md">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          Не удалось загрузить страницу
        </h2>
        <p className="text-slate-600 mb-6">
          Проверьте подключение к интернету и попробуйте обновить страницу.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-700 text-white font-semibold transition hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
        >
          Повторить загрузку
        </button>
      </div>
    </div>
  );
}
