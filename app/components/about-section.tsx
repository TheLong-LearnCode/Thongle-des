import { SectionHeading } from "./section-heading";

const values = [
  "Rõ ràng trong cấu trúc",
  "Tập trung vào trải nghiệm",
  "Ưu tiên hiệu năng và khả năng mở rộng",
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-[#4AB265]/30 bg-[#06373B]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="About me"
          title="Một profile ngắn gọn nhưng đủ để người xem hiểu bạn là ai và bạn đang theo đuổi điều gì."
          description="Phần này nên kể câu chuyện nghề nghiệp của bạn theo cách tự nhiên: điểm mạnh chính, phong cách làm việc, và kiểu sản phẩm bạn muốn đồng hành."
        />

        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-[#4AB265]/30 bg-[#061A23] p-8 shadow-[0_18px_50px_rgba(74,178,101,0.06)]">
            <p className="text-base leading-8 text-[#F4F6F7] sm:text-lg">
              Tôi thích xây dựng giao diện có cấu trúc chặt chẽ, typography rõ ràng và các
              khoảng trắng được tính toán cẩn thận. Mỗi component không chỉ đẹp mà còn phải
              dễ đọc, dễ bảo trì và phù hợp với hành trình của người dùng.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-3xl border border-[#4AB265]/30 bg-[#061A23] p-5 text-sm font-medium leading-6 text-white shadow-sm"
              >
                {value}
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-[#4AB265] p-6 text-white shadow-[0_20px_50px_rgba(74,178,101,0.16)]">
              <p className="text-sm uppercase tracking-[0.28em] text-white/70">Working style</p>
              <p className="mt-4 text-xl font-semibold">Collaborative, detail-oriented, and delivery-focused.</p>
            </div>
            <div className="rounded-[1.75rem] bg-[#061A23] p-6 text-white shadow-[0_20px_50px_rgba(74,178,101,0.12)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[#4AB265]">Goal</p>
              <p className="mt-4 text-xl font-semibold">Build portfolio work that feels premium without being over-designed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
