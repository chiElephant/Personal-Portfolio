import NavBar from './navigation/NavBar'

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}