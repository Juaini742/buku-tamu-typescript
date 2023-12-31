import {Container} from "../../atoms";

function Header(props: {onToggleSidebar: any}) {
  const {onToggleSidebar} = props;
  return (
    <header className="w-full bg-primary fixed z-20">
      <Container>
        <div className="h-16 flex justify-between items-center">
          <div className="">
            <button className="" onClick={onToggleSidebar}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="29"
                  viewBox="0 0 39 29"
                  fill="none"
                >
                  <rect width="39" height="5" fill="#D9D9D9" />
                  <rect y="8" width="39" height="5" fill="#D9D9D9" />
                  <rect y="16" width="39" height="5" fill="#D9D9D9" />
                  <rect y="24" width="39" height="5" fill="#D9D9D9" />
                </svg>
              </span>
            </button>
          </div>
          <div>
            <h2 className="text-xl text-white font-bold">BPS</h2>
          </div>
          <div className="w-14">
            <img src="../image/logoStatistik.png" alt="" />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
