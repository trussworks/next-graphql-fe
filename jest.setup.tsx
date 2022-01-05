import "@testing-library/jest-dom/extend-expect"
import { toHaveNoViolations } from "jest-axe"
import * as NextImage from "next/image"
import { setLogger } from "react-query"
import { enableFetchMocks } from "jest-fetch-mock"

enableFetchMocks()

// hide expected react-query network errors
// See: https://react-query.tanstack.com/guides/testing#turn-off-network-error-logging
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
})

// Replace next/image with img element
type ImgProps = { src: string; alt: string; width: number; height: number }
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: ({ src, alt, width, height }: ImgProps) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} height={height} width={width} />
  },
})

// Add toHaveNoVioloations function to jest expect assertions
expect.extend(toHaveNoViolations)

beforeEach(() => {
  jest.clearAllMocks()
  jest.clearAllTimers()
})
