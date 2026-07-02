type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-title text-sm font-semibold uppercase tracking-[0.3em] text-[#C084FC]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-title text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
