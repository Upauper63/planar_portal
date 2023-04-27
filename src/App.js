import PlaneChase from "./planechase.json";
import { useState } from "react";

function App() {
	// 配列をランダムな順に並び替え
	const shuffleArray = (array) => {
		const cloneArray = [...array]
		for (let i = cloneArray.length - 1; i >= 0; i--) {
			let rand = Math.floor(Math.random() * (i + 1))
			// 配列の要素の順番を入れ替える
			let tmpStorage = cloneArray[i]
			cloneArray[i] = cloneArray[rand]
			cloneArray[rand] = tmpStorage
		}

		return cloneArray
	}
	// ランダムなインデックス用配列を生成
  const arr = shuffleArray([...Array(PlaneChase.length).keys()]);

  const [tmpIdx, setTmpIdx] = useState(0);

  return (
    <div style={{ position: "relative" }}>
      <p
        style={{
          background: "white",
          opacity: "0.7",
          borderRadius: "8px",
          whiteSpace: "preWrap",
          padding: "8px",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "16px",
          width: "80%",
        }}
      >{`${PlaneChase[arr[tmpIdx]].text_jp}`}</p>
	  <button 
	  onClick={() => setTmpIdx(tmpIdx + 1)}
	  style={{
		background: "white",
		opacity: "0.7",
		borderRadius: "8px",
		whiteSpace: "preWrap",
		padding: "8px",
		position: "absolute",
		top: "10%",
		left: "80%",
		transform: "translate(-50%,-50%)",
		fontSize: "16px",
	  }}
	  >
		PW!
	</button>

      <div style={{ textAlign: "center" }}>
        <img
          style={{ height: "100vh" }}
          src={`${process.env.PUBLIC_URL}/img/${PlaneChase[arr[tmpIdx]].name.replace(
            /\s+/g,
            ""
          )}.jpg`}
        />
      </div>
    </div>
  );
}

export default App;
