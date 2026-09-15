import SwiftUI
import WebKit

@main
struct NaUlitsuApp: App {
    var body: some Scene {
        WindowGroup {
            WebView(url: URL(string: "https://teazy865.github.io/na-ulitsu/?v=20")!)
                .ignoresSafeArea()
                .preferredColorScheme(.dark)
        }
    }
}

struct WebView: UIViewRepresentable {
    let url: URL
    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        let view = WKWebView(frame: .zero, configuration: config)
        view.scrollView.bounces = true
        view.isOpaque = false
        view.backgroundColor = UIColor(red: 0.13, green: 0.16, blue: 0.20, alpha: 1)
        view.load(URLRequest(url: url))
        return view
    }
    func updateUIView(_ uiView: WKWebView, context: Context) {}
}
