import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`/yblog.dev${src}`} {...rest} />
)

export default Image