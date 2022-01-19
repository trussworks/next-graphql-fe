import React from "react"
import { renderWithQueryClient as render, validateA11y } from "utils/test-utils"
import { ColorTag } from "components/ColorTag/ColorTag"
import { TagColorsEnum } from "types/enums"

describe("Color Tag", () => {
  it("renders a colored tag correctly", () => {
    const { getByTestId } = render(<ColorTag color={TagColorsEnum.blue} />)

    const tag = getByTestId("tag")
    expect(tag).toBeInTheDocument()
    expect(tag).toHaveTextContent(/blue/i)
  })

  it("matches snapshot", () => {
    const { container } = render(<ColorTag color={TagColorsEnum.blue} />)

    expect(container).toMatchSnapshot()
  })

  it("blue tag is accessiable", async () => {
    const { container } = render(<ColorTag color={TagColorsEnum.blue} />)

    await validateA11y(container)
  })

  it("gray tag is accessiable", async () => {
    const { container } = render(<ColorTag color={TagColorsEnum.gray} />)

    await validateA11y(container)
  })

  it("purple tag is accessiable", async () => {
    const { container } = render(<ColorTag color={TagColorsEnum.purple} />)

    await validateA11y(container)
  })

  it("brown tag is accessiable", async () => {
    const { container } = render(<ColorTag color={TagColorsEnum.brown} />)

    await validateA11y(container)
  })
})
