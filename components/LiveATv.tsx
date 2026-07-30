'use client';
import { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { Play, Monitor, AlertCircle, RefreshCw } from 'lucide-react';

type Channel = {
  name: string;
  url: string;
  quality: string;
  group?: string;
};

const channels: Channel[] = [
  // Your original + working ones
  { name: "Test Stream (Reliable)", url: "https://test-streams.mux.dev/x264_720p_1500kbs_30fps.mp4", quality: "720p" },
  { name: "Đồng Tháp TV1", url: "https://liveh34.vtvprime.vn/hls/DONGTHAPTV/index.m3u8", quality: "720p" },
  { name: "HanoiTV1", url: "https://liveh34.vtvprime.vn/hls/HANOI1TV/index.m3u8", quality: "720p" },
  { name: "HanoiTV2", url: "https://liveh34.vtvprime.vn/hls/HANOI2TV/index.m3u8", quality: "720p" },
  { name: "HTV7 HD", url: "https://liveh12.vtvprime.vn/hls/HTV7HD/index.m3u8", quality: "1080p" },
  { name: "Hà Tĩnh TV", url: "https://wse.hatinhtv.net/live/httv1/chunklist.m3u8", quality: "720p" },
  
  // Additional popular Vietnamese channels from iptv-org
  { name: "VTV1", url: "https://liveh34.vtvprime.vn/hls/VTV1/index.m3u8", quality: "1080p" },
  { name: "VTV3", url: "https://liveh34.vtvprime.vn/hls/VTV3/index.m3u8", quality: "1080p" },
  { name: "HTV9 HD", url: "https://liveh12.vtvprime.vn/hls/HTV9HD/index.m3u8", quality: "1080p" },
  { name: "THVL1", url: "https://liveh34.vtvprime.vn/hls/THVL1/index.m3u8", quality: "720p" },
];

export default function LiveTV() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<Channel>(channels[0]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const playChannel = async (channel: Channel) => {
    setIsLoading(true);
    setError("");
    setSelectedChannel(channel);

    const video = videoRef.current;
    if (!video) return;

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    video.pause();
    video.src = "";

    try {
      if (channel.url.endsWith('.mp4')) {
        video.src = channel.url;
        await video.play();
      } else if (Hls.isSupported()) {
        const hls = new Hls({ lowLatencyMode: true });
        hlsRef.current = hls;
        hls.loadSource(channel.url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => setError("Playback failed. Try another channel."));
        });
      } else {
        video.src = channel.url;
        await video.play();
      }
    } catch (err) {
      setError("Stream unavailable or geo-blocked.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    playChannel(channels[0]);
    return () => hlsRef.current?.destroy();
  }, []);

  return (
    <section className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold tracking-tighter mb-3">Live Vietnamese TV</h2>
          <p className="text-slate-400">Powered by Public IPTV Sources</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Player */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <video ref={videoRef} className="w-full h-full" controls muted playsInline />

              {error && (
                <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center">
                  <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
                  <p className="text-red-400 mb-6 text-center max-w-xs">{error}</p>
                  <button 
                    onClick={() => playChannel(selectedChannel)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-2xl"
                  >
                    <RefreshCw className="w-5 h-5" /> Retry
                  </button>
                </div>
              )}

              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-20">
                  <div className="animate-spin w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full" />
                </div>
              )}

              <div className="absolute top-6 left-6 bg-black/70 px-5 py-2 rounded-full text-sm flex items-center gap-2 z-10">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                LIVE — {selectedChannel.name}
              </div>
            </div>
          </div>

          {/* Channels */}
          <div className="lg:col-span-4">
            <div className="glass rounded-3xl p-6 h-full overflow-y-auto border border-white/10">
              <h3 className="font-semibold mb-6 text-lg">Channels ({channels.length})</h3>
              <div className="space-y-3">
                {channels.map((ch, i) => (
                  <button
                    key={i}
                    onClick={() => playChannel(ch)}
                    className={`w-full p-5 rounded-2xl text-left flex items-center gap-4 transition-all border ${
                      selectedChannel.name === ch.name 
                        ? 'bg-cyan-500/10 border-cyan-400' 
                        : 'hover:bg-white/5 border-transparent'
                    }`}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                      📺
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{ch.name}</div>
                      <div className="text-xs text-slate-500">{ch.quality}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}