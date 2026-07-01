import { SectionHeading } from "./section-heading";

const projects = [
  {
    name: "Minimal Portfolio",
    description:
      "Một landing page cá nhân tập trung vào typography, spacing và cấu trúc nội dung để tăng khả năng chuyển đổi liên hệ.",
    tags: ["Next.js", "Design System", "Responsive"],
  },
  {
    name: "Product Dashboard",
    description:
      "Bảng điều khiển nội bộ với các thẻ số liệu, danh sách hành động và trạng thái được tổ chức rõ ràng.",
    tags: ["TypeScript", "Data UI", "Reusable Components"],
  },
  {
    name: "Campaign Microsite",
    description:
      "Trang chiến dịch có chuyển động nhẹ, các khối nội dung ngắn và lời kêu gọi hành động nổi bật.",
    tags: ["Landing Page", "Branding", "Conversion"],
  },
];

export function ProjectsSection() {
  return (
    <section id="project" className="border-b border-[#4AB265]/30 bg-[#06373B]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Project"
          title="Các dự án nên cho thấy bạn giải quyết vấn đề gì, bằng stack nào, và tạo ra giá trị ra sao."
          description="Đừng chỉ liệt kê tên dự án. Hãy thêm bối cảnh, mục tiêu, và kết quả để portfolio có sức nặng hơn."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group rounded-[2rem] border border-[#4AB265]/30 bg-[#061A23] p-7 shadow-[0_18px_50px_rgba(74,178,101,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F4F6F7]">
                  0{index + 1}
                </p>
                <span className="rounded-full bg-[#4AB265] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  Featured
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                {project.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#F4F6F7]">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#4AB265]/30 bg-[#4AB265]/10 px-3 py-1 text-xs font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
