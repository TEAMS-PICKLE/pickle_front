// app/wbs/page.tsx
// Next.js (App Router) + TypeScript + TailwindCSS
// VAC 패턴 적용: View, Adapter, Container으로 분리

import WBSTimelineView from "@/components/wbs/WBSTimeline.view";
import WBSTimelineContainer from "@/components/wbs/WBSTimeline.container";

export default function WBSTimelinePage() {
  return <WBSTimelineContainer />;
}

// components/wbs/WBSTimeline.container.tsx
// 데이터 주입 및 상태 관리 담당
import WBSTimelineAdapter from "./WBSTimeline.adapter";

export default function WBSTimelineContainer() {
  // 여기서는 API 호출, 서버 액션, useQuery 등 비즈니스 로직을 처리할 수 있음
  const today = 8;
  const totalDays = 14;

  const tasks = [
    { id: 1, assignee: "Alexis Tran", img: 21, start: 1, length: 3, percent: 100, color: "gray" },
    { id: 2, assignee: "Derek Yu", img: 47, start: 2, length: 3, percent: 50, color: "emerald" },
    { id: 3, assignee: "Alice", img: 5, start: 3, length: 5, percent: 20, color: "emerald-200" },
    { id: 4, assignee: "Alexis Tran", img: 21, start: 4, length: 3, percent: 50, color: "gray" },
    { id: 5, assignee: "Alexis Tran", img: 21, start: 6, length: 3, percent: 20, color: "gray" },
    { id: 6, assignee: "Alice", img: 5, start: 6, length: 4, percent: 10, color: "gray" },
    { id: 7, assignee: "Derek Yu", img: 47, start: 9, length: 4, percent: 10, color: "gray" },
  ];

  return <WBSTimelineAdapter today={today} totalDays={totalDays} tasks={tasks} />;
}

// components/wbs/WBSTimeline.adapter.tsx
// View에 필요한 데이터만 변환 및 전달
import WBSTimelineView from "./WBSTimeline.view";

export interface Task {
  id: number;
  assignee: string;
  img: number;
  start: number;
  length: number;
  percent: number;
  color: string;
}

interface Props {
  today: number;
  totalDays: number;
  tasks: Task[];
}

export default function WBSTimelineAdapter({ today, totalDays, tasks }: Props) {
  const todayPosition = (today - 1) / totalDays;

  const normalizedTasks = tasks.map((t) => ({
    ...t,
    left: (t.start - 1) / totalDays,
    width: t.length / totalDays,
  }));

  return <WBSTimelineView todayPosition={todayPosition} tasks={normalizedTasks} totalDays={totalDays} />;
}

// components/wbs/WBSTimeline.view.tsx
// 순수 UI 담당
import { Task } from "./WBSTimeline.adapter";

interface Props {
  todayPosition: number;
  tasks: (Task & { left: number; width: number })[];
  totalDays: number;
}

export default function WBSTimelineView({ todayPosition, tasks, totalDays }: Props) {
  return (
    <div className="bg-[#e6f0f8] min-h-screen p-4">
      <div className="mx-auto max-w-[1200px] border-8 border-[#b7d3ea] rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 border-r border-gray-200 p-4 space-y-3 bg-white">
            <div className="flex items-center gap-2 text-gray-800 font-semibold">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-gray-100">Ⅱ</span>
              프로젝트 명
            </div>
            {/* ... 생략된 메뉴 ... */}
          </aside>

          {/* Main */}
          <main className="flex-1 p-6 bg-white">
            <header className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold">상위 프로젝트 이름</h1>
                  <span className="rounded-full text-xs px-2 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200">● Active</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    <img className="w-[22px] h-[22px] rounded-full object-cover ring-2 ring-white" src="https://i.pravatar.cc/32?img=12" alt="" />
                    <img className="w-[22px] h-[22px] rounded-full object-cover ring-2 ring-white" src="https://i.pravatar.cc/32?img=7" alt="" />
                    <img className="w-[22px] h-[22px] rounded-full object-cover ring-2 ring-white" src="https://i.pravatar.cc/32?img=3" alt="" />
                    <img className="w-[22px] h-[22px] rounded-full object-cover ring-2 ring-white" src="https://i.pravatar.cc/32?img=14" alt="" />
                  </div>
                  <span>Alice, Bob, Charlie +12 others</span>
                </div>
              </div>
              <button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm">WBS</button>
            </header>

            <section className="mt-8 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="text-gray-700 font-medium">4월</div>

              {/* 날짜 헤더 */}
              <div className={`grid grid-cols-${totalDays} mt-2 text-center text-gray-500 text-sm select-none`}>
                {Array.from({ length: totalDays }, (_, i) => (
                  <div key={i} className={`py-2 ${i < totalDays - 1 ? "border-r border-gray-200" : ""}`}>
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="relative mt-2 border-t border-gray-200" style={{ height: 360 }}>
                {/* 오늘 라인 */}
                <div className="absolute top-0 bottom-0 w-[2px] bg-red-500" style={{ left: `${todayPosition * 100}%` }} />

                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`absolute flex items-center gap-2 px-2 h-10 rounded-xl bg-${task.color} text-gray-800`}
                    style={{ left: `${task.left * 100}%`, width: `${task.width * 100}%`, top: task.id * 52 }}
                  >
                    <img className="w-5 h-5 rounded-full object-cover" src={`https://i.pravatar.cc/40?img=${task.img}`} alt="" />
                    <span className="text-sm">{task.assignee}</span>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-white/60 border">{task.percent}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-sm font-medium text-emerald-600 flex items-center gap-2">
                <span>▾</span> 하위 프로젝트 2
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
