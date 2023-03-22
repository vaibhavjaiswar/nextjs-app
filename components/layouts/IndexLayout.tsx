type IndexLayoutProps = {
  children: JSX.Element
}

function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <>
      <main className="min-h-screen bg-slate-200 flex justify-center items-center">{children}</main>
    </>
  )
}

export default IndexLayout
