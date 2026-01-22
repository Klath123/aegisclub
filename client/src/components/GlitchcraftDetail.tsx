import React from 'react';
import { Lock, ArrowLeft, Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlitchcraftDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,150,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,150,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/events')}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono">Back to Events</span>
          </button>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Lock className="w-12 h-12 text-purple-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-purple-400 tracking-tight">
                GLITCHCRAFT
              </h1>
            </div>
            <p className="text-xl text-gray-300 font-mono">
              MISSION_ID: DCP-002 | STATUS: <span className="text-purple-400">ACTIVE</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
              <Calendar className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-bold text-purple-400 mb-2">Date & Time</h3>
              <p className="text-gray-300">TBA</p>
              <p className="text-sm text-gray-500 mt-1">Duration: 3-4 hours</p>
            </div>

            <div className="bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
              <MapPin className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-bold text-purple-400 mb-2">Location</h3>
              <p className="text-gray-300">TBA</p>
              <p className="text-sm text-gray-500 mt-1">In-person event</p>
            </div>

            <div className="bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
              <Users className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-bold text-purple-400 mb-2">Participation</h3>
              <p className="text-gray-300">Individual</p>
              <p className="text-sm text-gray-500 mt-1">Solo challenge</p>
            </div>
          </div>

          <div className="bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">About the Event</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-2xl font-mono text-purple-300 mb-4">
                Decode the glitch. Defend the future.
              </p>
              <p>
                GLITCHCRAFT is an exciting cryptography and logic puzzle challenge that tests your ability 
                to decode encrypted messages, identify patterns, and solve complex puzzles. This event is 
                perfect for those who love cracking codes and thinking outside the box.
              </p>
              <p>
                Participants will face a series of increasingly challenging puzzles involving various 
                encryption methods, pattern recognition, reverse engineering, and logical deduction. Each 
                puzzle solved brings you closer to uncovering the final mystery.
              </p>
              <p>
                This event is designed for beginners to intermediate participants who want to explore the 
                fascinating world of cryptography and puzzle-solving in a fun, competitive environment.
              </p>
            </div>
          </div>

          <div className="bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Classical cipher techniques',
                'Modern encryption methods',
                'Pattern recognition',
                'Logical deduction',
                'Reverse engineering concepts',
                'Binary and hexadecimal analysis',
                'Creative problem-solving',
                'Attention to detail'
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-purple-950/20 border border-purple-900/30 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Challenge Format</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-950/20 border border-purple-900/30 rounded-lg">
                <h3 className="text-xl font-bold text-purple-300 mb-2">Round 1: Basic Ciphers</h3>
                <p className="text-gray-300">Decode messages using classical encryption techniques</p>
              </div>
              <div className="p-4 bg-purple-950/20 border border-purple-900/30 rounded-lg">
                <h3 className="text-xl font-bold text-purple-300 mb-2">Round 2: Pattern Analysis</h3>
                <p className="text-gray-300">Identify and exploit patterns in encrypted data</p>
              </div>
              <div className="p-4 bg-purple-950/20 border border-purple-900/30 rounded-lg">
                <h3 className="text-xl font-bold text-purple-300 mb-2">Round 3: Logic Puzzles</h3>
                <p className="text-gray-300">Solve complex logical challenges and riddles</p>
              </div>
              <div className="p-4 bg-purple-950/20 border border-purple-900/30 rounded-lg">
                <h3 className="text-xl font-bold text-purple-300 mb-2">Final Challenge</h3>
                <p className="text-gray-300">Apply all your skills to crack the ultimate puzzle</p>
              </div>
            </div>
          </div>

          <div className="bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-6 flex items-center gap-3">
              <Trophy className="w-8 h-8" />
              Prizes & Recognition
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">🥇 First Place</h3>
                <p className="text-gray-300">TBA</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-gray-400/10 to-gray-500/10 border border-gray-400/30 rounded-lg">
                <h3 className="text-xl font-bold text-gray-300 mb-2">🥈 Second Place</h3>
                <p className="text-gray-300">TBA</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-orange-600/10 to-orange-700/10 border border-orange-600/30 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400 mb-2">🥉 Third Place</h3>
                <p className="text-gray-300">TBA</p>
              </div>
            </div>
          </div>

          <div className="bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Registration</h2>
            <p className="text-gray-300 mb-6">
              Registration details will be announced soon. Stay tuned for updates!
            </p>
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20">
              <span>Register Now (Coming Soon)</span>
              <Lock className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlitchcraftDetail;