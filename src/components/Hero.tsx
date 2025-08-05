// ヒーローセクション
const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* 背景のアニメーション */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="text-center text-white z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          neotyaso
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-300">大学1年生 • Web Developer</p>
        <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          React & TypeScript で美しいWebサイトを作る、未来のフルスタックエンジニア
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            プロジェクトを見る
          </a>
          <a href="#contact" className="block border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-200">
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero