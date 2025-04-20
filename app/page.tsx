import { CheckCircle, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" items-center ">
      <main className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#eaf3ff] text-gray-800">
        {/* Hero */}
        <section className="py-20 px-6 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            AutoFriends+ <span className="text-blue-600">Chrome Extension</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Kết bạn Facebook tự động, thông minh và an toàn. Công cụ tăng trưởng
            kết nối hiệu quả cho bán hàng, tuyển dụng và marketing.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="#"
              className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-6 py-3 rounded-full"
            >
              Cài đặt miễn phí
            </Link>
            <Link
              href="#"
              className="text-blue-600 border-blue-600 text-lg px-6 py-3 rounded-full"
            >
              Nâng cấp Pro
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                🌟 Tính năng nổi bật
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 mt-1" /> Gửi lời mời tự
                  động theo danh sách người tương tác
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 mt-1" /> Lọc theo giới
                  tính, độ tuổi, nghề nghiệp, tỉnh thành (Pro)
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 mt-1" /> Gửi tin nhắn tự
                  động sau khi kết bạn (Pro)
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 mt-1" /> Chống
                  checkpoint bằng delay ngẫu nhiên + nội dung linh hoạt
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 mt-1" /> Lưu lịch sử kết
                  bạn, theo dõi trạng thái chấp nhận hay từ chối
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                🎯 Gói Miễn Phí
              </h3>
              <p className="text-gray-700 mb-4">
                Sử dụng ngay không cần đăng ký:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="text-green-500" /> Gửi tối đa 25–50
                  lời mời/ngày
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="text-green-500" /> Không cần lọc,
                  không giới hạn tính năng cơ bản
                </li>
              </ul>
              <Link
                href="#"
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-full"
              >
                Dùng ngay miễn phí
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-[#f9fbff] text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-900">
            💰 Gói Pro phù hợp cho bạn
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
            {[
              {
                title: "Cơ bản",
                price: "99k/tháng",
                features: ["100–200 lượt/ngày", "Bộ lọc cơ bản"],
              },
              {
                title: "Nâng cao",
                price: "199k/tháng",
                features: [
                  "300–1000 lượt/ngày",
                  "Lọc nâng cao",
                  "Tin nhắn tự động",
                ],
              },
              {
                title: "VIP",
                price: "299k–499k/tháng",
                features: [
                  "Không giới hạn lượt",
                  "AI Chatbot + hỗ trợ trực tiếp",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-lg text-gray-800 mb-4">{plan.price}</p>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Sparkles className="text-blue-500" size={16} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="#"
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full"
                >
                  Mua ngay
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tăng trưởng Facebook hiệu quả hơn với AutoFriends+
          </h2>
          <p className="text-lg mb-6">
            Chỉ cần 1 lần cài đặt – hiệu quả cả hành trình kết nối
          </p>
          <Link
            href="#"
            className="bg-white text-blue-600 hover:bg-blue-100 text-lg px-6 py-3 rounded-full"
          >
            Cài đặt ngay
          </Link>
        </section>

        <footer className="py-6 text-center text-gray-500 text-sm">
          © 2025 AutoFriends+ | Made with ❤️ by bạn
        </footer>
      </main>
    </div>
  );
}
