declare module 'mktemp'

declare module 'video-react'

interface IStatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
}
