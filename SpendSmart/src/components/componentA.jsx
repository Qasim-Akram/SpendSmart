import { userProvider } from "../context/contex"
export function ComponentA(){
    return (
    <userProvider value={"Component A"}>
    <div>Component A is a parent component </div>
    </userProvider>
)
}