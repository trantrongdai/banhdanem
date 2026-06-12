import React from "react";

const ingredients = [
  "Đa nem: 2 túi, chọn loại để rán, có thể dùng loại tròn hoặc hình chữ nhật.",
  "Thịt nạc: 350g.",
  "Tôm tươi: 500g.",
  "Miến dong: 200g.",
  "Nấm hương: 100g.",
  "Mộc nhĩ: 150g.",
  "Trứng gà: 2 quả.",
  "Cà rốt: 1 củ.",
  "Hành tây: 1 củ.",
  "Mùi ta, hành lá: mỗi thứ 1 mớ.",
  "Hành tím: 2 củ, tỏi: 1 củ, ớt: 1 quả, chanh: 1 quả.",
  "Rau xà lách ăn kèm.",
  "Gia vị: nước mắm, đường, muối, hạt nêm, bột ngọt, hạt tiêu xay.",
  "Chảo sâu lòng để rán.",
];

const steps = [
  {
    title: "Bước 1: Sơ chế nguyên liệu",
    items: [
      "Thịt nạc rửa sạch, băm nhỏ hoặc xay nhỏ rồi cho ra bát tô. Không nên xay quá nhuyễn để thịt ngon hơn.",
      "Tôm tươi lột vỏ, bỏ phần đầu, rút chỉ đen, rửa sạch và để ráo.",
      "Miến dong ngâm nước ấm khoảng 15 phút cho mềm, vớt ra để ráo rồi cắt đoạn khoảng 5cm.",
      "Nấm hương và mộc nhĩ ngâm nước ấm khoảng 10 phút cho nở, bóp với chút muối, rửa sạch rồi thái nhỏ.",
      "Trứng gà đập ra bát và đánh tan.",
      "Cà rốt gọt vỏ, nạo sợi nhỏ. Hành tây thái hạt lựu.",
      "Mùi ta, hành lá nhặt bỏ gốc, rửa sạch và thái nhỏ.",
      "Hành tím, tỏi bóc vỏ, đập dập và băm nhỏ. Ớt thái nhỏ, bỏ hạt.",
    ],
  },
  {
    title: "Bước 2: Ướp và trộn nhân",
    items: [
      "Cho 1 thìa cà phê muối, 1 thìa cà phê hạt nêm, 1 thìa cà phê nước mắm, hành tím băm và hạt tiêu xay vào thịt xay. Trộn đều rồi để ngấm khoảng 15 phút.",
      "Cho thịt đã ướp, tôm, miến, nấm hương, mộc nhĩ, cà rốt, hành tây, hành lá và mùi ta vào thau sạch.",
      "Đổ trứng đã đánh tan lên trên, sau đó trộn đều tất cả nguyên liệu.",
    ],
  },
  {
    title: "Bước 3: Gói bánh đa nem",
    items: [
      "Trải bánh đa nem ra mâm hoặc bàn sạch. Dùng khăn sạch ẩm lau qua bánh, hoặc vẩy ít nước để bánh mềm và không bị giòn gãy.",
      "Múc khoảng 2 thìa con nhân đặt vào giữa bánh. Gập mép bánh lại rồi cuộn tròn.",
      "Cuộn được một vòng thì gấp hai mép bên cạnh vào trong, sau đó cuộn tiếp cho đến hết.",
      "Nếu bánh bị gãy, rách hoặc bục nhân ra ngoài thì nên bỏ ra và gói lại.",
    ],
  },
  {
    title: "Bước 4: Rán bánh đa nem",
    items: [
      "Bắc chảo lên bếp, đổ khoảng 500ml dầu ăn vào và đun nóng.",
      "Thả nhẹ nem vào rán vàng. Khi rán nên vặn nhỏ lửa để phần nhân bên trong chín đều.",
      "Khi vỏ ngoài vàng giòn, gắp nem ra khay có lót giấy thấm dầu.",
      "Nem rán xong có thể cắt miếng vừa ăn hoặc để nguyên, dùng nóng với nước mắm chua ngọt và rau sống.",
    ],
  },
];

const sauces = [
  {
    title: "Cách 1: Nước mắm chua ngọt",
    content:
      "Pha theo tỷ lệ 1 : 3 : 1 : 2 gồm 1 thìa canh nước mắm ngon, 3 thìa cà phê đường, nước cốt 1 quả chanh và 2 thìa canh nước sôi để nguội. Khuấy tan, thêm tỏi băm, ớt băm, gừng băm, rau mùi và cà rốt bào sợi.",
  },
  {
    title: "Cách 2: Nước mắm với đu đủ, cà rốt",
    content:
      "Cho cà rốt, đu đủ thái mỏng, ớt băm, tỏi băm và chút hạt tiêu vào bát. Pha 1 thìa canh nước mắm, 2 thìa canh nước lọc, 3 thìa cà phê đường và nước cốt 1 quả chanh, khuấy tan rồi cho phần đu đủ, cà rốt vào.",
  },
];

const notes = [
  "Trộn nhân xong nên gói ngay, không để lâu vì nhân dễ chảy nước và bị nát.",
  "Không cuộn quá chặt tay vì khi rán trứng và nhân sẽ nở ra, dễ làm nem bị bục.",
  "Rán ngập dầu giúp bánh đa nem vàng đều và giòn hơn.",
];

function Section({ eyebrow, title, children }) {
  return (
    <section className="section">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <main>
      <article className="recipe-card">
        <header className="hero">
          <p className="source-label">Bếp Eva · Món ngon mỗi ngày</p>
          <h1>Cách làm bánh đa nem giòn rụm thơm ngon đúng vị truyền thống</h1>
          <p className="lead">
            Vỏ ngoài vàng giòn rụm, nhân bên trong chín mềm thơm ngọt nhiều mùi
            vị mà không ngấy. Bánh đa nem rán xong ăn nóng, chấm kèm nước mắm
            chua ngọt và chút rau sống thì rất hợp vị.
          </p>
          <div className="meta">
            <span>Ngày đăng: 28/07/2020</span>
            <span>Thời gian đọc: 6 phút</span>
          </div>
        </header>

        <Section eyebrow="Chuẩn bị" title="Nguyên liệu làm bánh đa nem">
          <ul className="grid-list">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Thực hiện" title="Cách làm bánh đa nem giòn, ngon">
          <div className="steps">
            {steps.map((step) => (
              <section className="step" key={step.title}>
                <h3>{step.title}</h3>
                <ul>
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Section>

        <Section title="2 cách pha nước chấm đa nem rán chuẩn vị">
          <div className="sauce-list">
            {sauces.map((sauce) => (
              <section className="sauce" key={sauce.title}>
                <h3>{sauce.title}</h3>
                <p>{sauce.content}</p>
              </section>
            ))}
          </div>
        </Section>

        <Section title="Lưu ý khi làm bánh đa nem">
          <ul className="note-list">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Section>

        <footer className="footer">
          <p>
            Nội dung được biên tập lại từ bài viết gốc trên{" "}
            <a
              href="https://eva.vn/bep-eva/cach-lam-banh-da-nem-gion-rum-thom-ngon-dung-vi-truyen-thong-c162a440549.html"
              target="_blank"
              rel="noreferrer"
            >
              Eva.vn
            </a>
            .
          </p>
        </footer>
      </article>
    </main>
  );
}

export default App;
