import { useEffect, useState } from "react";

// 사용자정의 생성된 훅 useFetch
// useEffect와 useState를 사용한다.
// 하나의 기능을 여러 컴포넌트에서 동일하게 사용할 경우, 코드의 사용성을 높일 수 있다.
export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
}
