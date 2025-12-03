// ...existing code...
export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-gray-300 mb-2">
          © {new Date().getFullYear()} SNOWY. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a href="#privacy" className="text-xs text-gray-300 hover:text-white transition-colors">
            Privacy
          </a>
          <span className="text-xs text-gray-500">|</span>
          <a href="#terms" className="text-xs text-gray-300 hover:text-white transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
// ...existing code...