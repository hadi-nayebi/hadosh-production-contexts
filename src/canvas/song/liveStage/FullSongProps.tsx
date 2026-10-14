import ToasterContact from "./ToasterContact";
import {useContext} from 'react';
import {SuppressPhraseBlocks} from './FoundationWordLayer';
import EmbodiedStory from "./EmbodiedStory";
import type { SceneObject } from "./scene.mjs";
import FeedProfile from "./FeedProfile";
const paper = "#f3e9d0",
  mint = "#8ad9b9",
  gold = "#edbc69",
  ink = "#122a2d";
const ease = (f: number, a: number, b: number) => {
  const t = Math.max(0, Math.min(1, (f - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
function Card({
  x,
  y,
  w = 250,
  h = 100,
  title,
  detail,
  active = false,
  unboxed = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  title: string;
  detail: string;
  active?: boolean;
  unboxed?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {!unboxed && (
        <rect
          width={w}
          height={h}
          rx="15"
          fill={active ? "#23574e" : "#173c40"}
          stroke={active ? gold : mint}
          strokeWidth={active ? 3 : 1.5}
        />
      )}
      <text x="18" y="35" fill={paper} fontSize="24" fontWeight="700">
        {title}
      </text>
      <text x="18" y="68" fill={mint} fontSize="18">
        {detail}
      </text>
    </g>
  );
}
function Arrow({
  x,
  y,
  length = 65,
  t = 0,
}: {
  x: number;
  y: number;
  length?: number;
  t?: number;
}) {
  return (
    <g stroke={gold} strokeWidth="3" fill={gold}>
      <path d={`M${x} ${y} h${length} m-10 -8 l10 8 -10 8`} fill="none" />
      <circle cx={x + length * (((t % 1) + 1) % 1)} cy={y} r="5" />
    </g>
  );
}
export default function FullSongProps({
  object: o,
  frame,
}: {
  object: SceneObject;
  frame: number;
}) {
  const suppressPhraseBlocks=useContext(SuppressPhraseBlocks);
  if(o.kind==='lyric-block'&&suppressPhraseBlocks)return null;
  if (
    [
      "story-phone",
      "story-workshop-embodied",
      "story-cortex",
      "story-headset",
      "story-file",
      "story-node",
      "story-edge",
      "story-arc",
      "story-fragment",
    ].includes(o.kind)
  )
    return <EmbodiedStory object={o} frame={frame} />;
  const seconds = frame / 30,
    age = frame - o.enterFrame,
    cycle = age / 90;
  if (o.kind === "lyric-block")
    return (
      <g data-lyric-block={o.id}>
        <rect
          width={o.width}
          height={o.height}
          rx="16"
          fill="#0b2025"
          fillOpacity=".96"
          stroke="#75988b"
        />
        <text
          x={o.width / 2}
          y={(o.text || "").includes("\n") ? 40 : 65}
          textAnchor="middle"
          fill={paper}
          fontFamily="Georgia,serif"
          fontSize="32"
          fontWeight="600"
        >
          {(o.text || "").split("\n").map((line, i) => (
            <tspan key={i} x={o.width / 2} dy={i ? 42 : 0}>
              {line}
            </tspan>
          ))}
        </text>
      </g>
    );
  if (o.kind === "story-feed")
    return (
      <g data-story="feed">
        <text y="-45" fill={gold} fontSize="32">
          A feed learns from your choices
        </text>
        <g transform="scale(.81)">
          <FeedProfile age={Math.max(0, (seconds - 79) * 30)} />
        </g>
        <text y="380" fill={paper} fontSize="23">
          You choose follows. The platform still chooses the order.
        </text>
      </g>
    );
  if (o.kind === "story-workshop") {
    const notes = seconds >= 113.6,
      revision = seconds >= 119.74,
      checked = seconds >= 122.64,
      approved = seconds >= 127.2;
    return (
      <g data-story="workshop">
        <text y="-45" fill={gold} fontSize="32">
          A project, a plan, and your final say
        </text>
        <Card
          x={0}
          y={0}
          w={235}
          title="Saved context"
          detail="Notes + writing rules"
          active={notes}
        />
        <Arrow x={243} y={50} length={54} t={cycle} />
        <Card
          x={310}
          y={0}
          w={245}
          title="External LLM"
          detail="Proposes the words"
          active={notes}
        />
        <Arrow x={565} y={50} length={55} t={cycle} />
        <Card
          x={635}
          y={0}
          w={235}
          title="Harness"
          detail="Routes tools + checks"
          active={checked}
        />
        <g transform="translate(0 135)">
          <rect width="535" height="240" rx="16" fill={paper} />
          <path d="M0 40 H535" stroke="#c1b591" />
          <circle cx="20" cy="20" r="5" fill="#d5816d" />
          <text x="45" y="27" fill={ink} fontSize="17">
            workshop / draft
          </text>
          <text x="25" y="88" fill={ink} fontSize="28" fontWeight="700">
            Build your first workshop
          </text>
          <text x="25" y="133" fill={revision ? "#26715d" : "#a34b41"} fontSize="23">
            {revision ? "Learn to make a useful project." : "The most amazing workshop ever!"}
          </text>
          <text x="25" y="175" fill={ink} fontSize="22">
            {revision ? "Time, place, and plain details." : "Draft returned for your review."}
          </text>
          <rect x="25" y="195" width={400 * ease(age, 100, 240)} height="9" rx="4" fill={mint} />
        </g>
        <Card
          x={565}
          y={135}
          w={305}
          title={checked ? "Date ✓   Link ✓" : "Check date and link"}
          detail="Tool results come back"
          active={checked}
        />
        <Card
          x={565}
          y={255}
          w={305}
          title={approved ? "Approved → publish" : "Waiting for approval"}
          detail={approved ? "Then verify the live page" : "Proposal is not permission"}
          active={approved}
        />
      </g>
    );
  }
  if (o.kind === "story-harness") {
    const correction = seconds >= 131.66,
      next = seconds >= 134.54,
      swapped = seconds >= 146.38;
    return (
      <g data-story="harness">
        <text y="-45" fill={gold} fontSize="32">
          Your harness grows around the model
        </text>
        <rect
          x="-14"
          y="-8"
          width="584"
          height="400"
          rx="24"
          fill="#1b4140"
          stroke={mint}
          strokeWidth="2"
        />
        <text x="10" y="25" fill={mint} fontSize="19">
          USER-EDITABLE WORKSPACE
        </text>
        <Card
          x={10}
          y={45}
          w={535}
          h={100}
          title="Memory · saved outside the model"
          detail={correction ? "“Clear words. Skip the pitch.”" : "Your saved project notes"}
          active={correction}
        />
        <Card
          x={10}
          y={170}
          title="Context selector"
          detail={next ? "Read on next project" : "Choose relevant notes"}
          active={next}
        />
        <Card
          x={290}
          y={170}
          title="Tool permissions"
          detail="Read ✓   Publish: ask"
          active={seconds >= 143.42}
        />
        <Card
          x={10}
          y={290}
          w={535}
          h={85}
          title="Plan → tools → check → approval"
          detail="You can inspect and change each rule"
          active={seconds >= 149.26}
        />
        <Arrow x={578} y={95} length={55} t={cycle} />
        <Card
          x={650}
          y={45}
          w={225}
          title={swapped ? "Model B" : "Model A"}
          detail="External intelligence"
          active={swapped}
        />
        <text x="650" y="205" fill={paper} fontSize="22">
          A correction changes
        </text>
        <text x="650" y="238" fill={paper} fontSize="22">
          your saved context.
        </text>
        <text x="650" y="291" fill={mint} fontSize="23">
          Not the model weights.
        </text>
        <text x="650" y="365" fill={gold} fontSize="24">
          Keep your work.
        </text>
      </g>
    );
  }
  if (o.kind === "story-toaster" && o.suggestion.startsWith("contact-"))
    return <ToasterContact object={o} frame={frame} />;
  if (o.kind === "story-toaster") {
    const turn = ease(frame, 5090, 5220),
      pop = ease(frame, 5480, 5510);
    return (
      <g data-story="toaster">
        <text y="-45" fill={gold} fontSize="32">
          The supply is bought. The tool stays yours.
        </text>
        <Card
          unboxed
          x={590}
          y={20}
          w={280}
          title="Electricity company"
          detail="Supplies the power"
        />
        <path d="M590 90 C510 90 535 285 460 285" fill="none" stroke={gold} strokeWidth="7" />
        <circle cx={520 + 30 * Math.sin(cycle)} cy="167" r="7" fill={paper} />
        <g transform="translate(80 80)">
          <g transform={`translate(0 ${-55 * pop})`}>
            <path
              d="M70 82 V5 Q130 -45 190 5 V82Z M215 82 V5 Q275 -45 335 5 V82Z"
              fill="#ddb36d"
              stroke="#9a6536"
              strokeWidth="8"
            />
          </g>
          <rect
            x="15"
            y="70"
            width="405"
            height="225"
            rx="42"
            fill="#c4d9d0"
            stroke="#63897c"
            strokeWidth="7"
          />
          <path d="M65 89 H350" stroke={ink} strokeWidth="10" strokeLinecap="round" />
          <circle cx="330" cy="210" r="40" fill={ink} />
          <g transform={`rotate(${turn * 95} 330 210)`}>
            <path d="M330 210 V181" stroke={gold} strokeWidth="7" strokeLinecap="round" />
          </g>
          <text x="62" y="183" fill={ink} fontSize="24">
            MY TOASTER
          </text>
          <text x="65" y="225" fill={ink} fontSize="21">
            My bread. My dial.
          </text>
          <path d="M45 297 V315 M380 297 V315" stroke={ink} strokeWidth="15" />
        </g>
        <Card
          unboxed
          x={590}
          y={210}
          w={280}
          title="Model provider"
          detail="Supplies intelligence"
        />
        <text x="590" y="370" fill={gold} fontSize="23">
          My notes. My tools. My choice.
        </text>
      </g>
    );
  }
  if (o.kind === "story-finale")
    return (
      <g data-story="finale">
        <text y="-45" fill={gold} fontSize="34">
          WHO HOLDS THE KEYS?
        </text>
        {["Browser", "Feed", "Harness", "Toaster"].map((name, i) => (
          <g key={name} transform={`translate(${i * 225} ${8 * Math.sin(cycle + i)})`}>
            <text x="98" y="122" textAnchor="middle" fill={gold} fontSize="48">
              {["↗", "♥", "{}", "⚡"][i]}
            </text>
            <text x="98" y="197" textAnchor="middle" fill={paper} fontSize="26">
              {name}
            </text>
            <path
              d="M155 218 h-20 v20"
              fill="none"
              stroke={gold}
              strokeWidth="7"
              strokeLinecap="round"
            />
          </g>
        ))}
        <text x="435" y="360" textAnchor="middle" fill={paper} fontSize="32">
          Let me look. Let me change it.
        </text>
        {seconds >= 209 && (
          <text x="435" y="415" textAnchor="middle" fill={gold} fontSize="30">
            Leave the final say with me.
          </text>
        )}
      </g>
    );
  return null;
}
