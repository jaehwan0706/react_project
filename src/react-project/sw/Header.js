import logo from "./logo.png";

function Header({ setMode }) {
  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', 
      backgroundColor: '#549ee7', // 배경색을 연한 회색으로 변경 (원하는 색상 코드로 수정 가능)
      borderBottom: '1px solid #eee', // 하단 구분선 추가


      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img
        src={logo}
        alt="logo"
        style={{ width: '32px', height: '32px' }}
        className="logo"
        onClick={() => setMode("WELCOME")}
      />
      <span
        className="title"
        onClick={() => setMode("WELCOME")}
      >
        React Book
      </span>
      </div>
      <button className="icon-btn" style={{ fontSize: '20px' }}>⋯</button>
    </header>
  );
}
export default Header;