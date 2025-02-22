import { Newspaper, ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function App() {

    const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Newspaper className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">NewsFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={()=>{
                navigate('/auth/signIn')
              }} className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                Login
              </button>
              <button onClick={()=>{
                navigate('/auth/signUp')
              }} className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                    <span className="block">Your personalized</span>
                    <span className="block text-blue-600 dark:text-blue-400">news experience</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Stay informed with curated news that matters to you. Join our community of informed readers and never miss important updates.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button onClick={()=>{
                        navigate('/auth/signUp')
                      }} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 md:py-4 md:text-lg md:px-10">
                        Get started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
              alt="News desk"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to stay informed
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900 dark:text-white">Trending Topics</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                  Stay up to date with the most discussed topics and trending news.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900 dark:text-white">Personalized Feed</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                  Get news tailored to your interests and preferences.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900 dark:text-white">Verified Sources</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                  Access news from trusted and verified sources only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Preview Section */}
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Latest Headlines</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-700 border border-gray-200 dark:border-gray-700 overflow-hidden">
                <img
                  className="h-48 w-full object-cover"
                  src={`https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80`}
                  alt="News preview"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">Technology</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    The Future of AI in Everyday Life
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Discover how artificial intelligence is transforming our daily routines and what to expect in the coming years.
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Newspaper className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">NewsFlow</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">© 2024 NewsFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;