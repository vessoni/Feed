import { Header } from "./components/Header";

export function Post(props){
  return (
    <div>
      <Header />
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}
