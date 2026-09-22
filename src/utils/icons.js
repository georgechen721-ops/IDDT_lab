// 研究領域可用的 icon（labData.js 裡用 icon: "brain" 這種名稱指定）
import {
  BrainCircuit, CalendarClock, MessagesSquare, Warehouse, ShieldAlert, Network,
  BarChart3, Factory, Truck, Cpu, Boxes, Stethoscope, Bot, Database,
} from 'lucide-react';

export const ICONS = {
  brain: BrainCircuit,
  calendar: CalendarClock,
  llm: MessagesSquare,
  warehouse: Warehouse,
  shield: ShieldAlert,
  network: Network,
  chart: BarChart3,
  factory: Factory,
  truck: Truck,
  cpu: Cpu,
  health: Stethoscope,
  robot: Bot,
  data: Database,
};

export const iconFor = (name) => ICONS[name] || Boxes;
