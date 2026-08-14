import { SectionHead } from "./SectionHead"
import screenHome from "@/assets/case-studies/xylence/screen-home.png"
import screenPipeline from "@/assets/case-studies/xylence/screen-pipeline.png"
import screenProfile from "@/assets/case-studies/xylence/screen-profile.png"
import screenVideo from "@/assets/case-studies/xylence/screen-video.png"

const screens = [
  {
    image: screenHome,
    alt: "Home screen — prioritised feed of what needs attention today",
    title: "Home — what needs attention today",
    body: "Not a dashboard of twelve widgets. A prioritised feed: capital across funds, deal flow by stage, the startups that entered since the last visit, and portfolio alerts. An analyst arriving on Monday should know what changed without opening anything else.",
  },
  {
    image: screenPipeline,
    alt: "Pipeline screen — Trello-style stage-gate board",
    title: "Pipeline — the workhorse",
    body: "Sourcing and evaluation take roughly half an analyst's week, so Pipeline is a top-level section rather than a buried tab. Inbox, Active, Deep dive, IC queue and Passed are stages of one decision — and Passed stays queryable, because a pass is a decision, not a deletion.",
    precedent: {
      eyebrow: "THE PRECEDENT I BORROWED FROM",
      headline: "Trello — because a pipeline is a waterfall, and a waterfall only works if you can read a card without opening it.",
      body: (
        <>
          An investment pipeline is a stage-gate process: a startup moves
          forward, backward or out, and it never occupies two stages at once.{" "}
          <strong className="font-semibold text-white">
            Trello has been the most durable interface for that shape of
            work
          </strong>
          , and the reason is not the columns — it is the card.{" "}
          <strong className="font-semibold text-white">
            A Trello card tells you there are three comments, two
            attachments and an unfinished checklist before you click into
            it.
          </strong>{" "}
          That glanceability is the whole mechanic, and it is exactly what
          an analyst holding sixty live opportunities needs.
        </>
      ),
    },
  },
  {
    image: screenProfile,
    alt: "Startup profile screen — founder analysis in the primary view",
    title: "Startup profile — the team comes first",
    body: "The academic evidence says VCs attribute outcomes to the founding team more than to the product, so founder analysis sits in the primary view rather than behind a tab. The match against the fund's own thesis is shown with its reasoning, not as a bare number.",
  },
  {
    image: screenVideo,
    alt: "Video analysis screen — contradictions between video and documents",
    title: "Video analysis — surfacing contradictions",
    body: "The engine compares what a founder says on video against what the documents claim. Rather than hide the conflict, the interface names it: contradictions, tone and summary are separate lenses on the same pitch. This is the Trust Layer principle made visible — the system shows its disagreements instead of resolving them silently.",
  },
]

export function Section06Product() {
  return (
    <section className="flex flex-col gap-14 bg-cs-bg px-6 py-16 md:px-16 md:py-24">
      <SectionHead
        number="06"
        title="Soundboard, where the system becomes visible"
        subtitle="The VC-side cockpit is where all four architectural decisions have to hold at once — dense financial data, machine reasoning that must be inspectable, and a workflow that has to survive a Monday morning."
      />
      {screens.map((screen) => (
        <div key={screen.title} className="flex flex-col overflow-hidden rounded-xl border border-cs-border">
          <img src={screen.image} alt={screen.alt} className="w-full" />
          <div className="flex flex-col gap-3.5 bg-cs-bg-3 px-6 py-6 md:px-8">
            <p className="font-case text-xl font-semibold text-white">{screen.title}</p>
            <p className="font-case text-base leading-relaxed text-cs-text md:text-[17px]">{screen.body}</p>
            {screen.precedent && (
              <div className="flex flex-col gap-2.5 rounded-lg border-l-[3px] border-cs-gold bg-cs-bg px-6.5 py-5.5">
                <p className="font-case text-sm font-bold tracking-[0.08em] text-cs-gold">
                  {screen.precedent.eyebrow}
                </p>
                <p className="font-case text-xl font-medium text-white">{screen.precedent.headline}</p>
                <p className="font-case text-base leading-relaxed text-cs-text">{screen.precedent.body}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
