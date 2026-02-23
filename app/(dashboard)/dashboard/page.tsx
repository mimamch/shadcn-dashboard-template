export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>

        <article className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Introduction to React Hooks
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Published on January 15, 2024
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            React Hooks revolutionized the way we write functional components.
            Before Hooks, managing state and side effects required class
            components, which could be verbose and harder to understand. With
            the introduction of useState and useEffect, developers can now build
            sophisticated components with less boilerplate code.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The useState hook allows you to add state to functional components.
            Instead of using this.state and this.setState, you can simply call
            useState with your initial value and get back the current state and
            a function to update it. This makes your code more readable and
            easier to test.
          </p>
          <p className="text-gray-700 leading-relaxed">
            useEffect, on the other hand, lets you perform side effects in
            functional components. Whether it&apos;s fetching data, subscribing
            to events, or manually changing the DOM, useEffect consolidates this
            functionality into one place. Combined with dependency arrays, you
            have fine-grained control over when your effects run.
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            TypeScript Best Practices
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Published on January 10, 2024
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            TypeScript adds static typing to JavaScript, helping catch errors
            before runtime. When working with TypeScript, it&apos;s crucial to
            define proper types for your functions and components. This not only
            makes your code safer but also improves IDE autocomplete and
            documentation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            One common practice is to define interfaces for your data
            structures. Instead of relying on implicit typing, be explicit about
            what properties your objects should have. This prevents bugs and
            makes refactoring easier when requirements change.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Another important practice is using strict mode in your
            tsconfig.json. This enables all strict type checking options, making
            TypeScript work harder to ensure your code is type-safe. While it
            might seem strict at first, it pays dividends in the long run by
            preventing entire classes of bugs.
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Web Performance Optimization
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Published on January 5, 2024
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Web performance is critical for user experience. A slow website can
            lead to higher bounce rates and lower conversions. There are many
            techniques to optimize your web application, from code splitting to
            lazy loading images.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Code splitting is a technique where you divide your JavaScript
            bundle into smaller chunks that are loaded on demand. Next.js makes
            this incredibly easy with dynamic imports. Instead of loading all
            your routes at once, you can load them only when users navigate to
            them.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Image optimization is another crucial aspect. Modern formats like
            WebP can significantly reduce file sizes. Using the Next.js Image
            component automatically handles optimization and responsive sizing,
            ensuring your images load quickly on all devices.
          </p>
        </article>
      </div>
    </div>
  );
}
