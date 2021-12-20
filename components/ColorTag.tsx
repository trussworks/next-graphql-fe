import { Tag } from "@trussworks/react-uswds"
import { TagColorsEnum } from "../types/enums"

// TODO: This can (and probably should) be done with CSS classes once we get styling worked out
const ColorTag = ({ color }: { color: TagColorsEnum }) => {
  let backgroundColor, textColor
  switch (color) {
    case TagColorsEnum.gray: {
      backgroundColor = "#3D4551"
      textColor = "#FFF"
      break
    }
    case TagColorsEnum.blue: {
      backgroundColor = "#73B3E7"
      textColor = "#FFF"
      break
    }
    case TagColorsEnum.purple: {
      backgroundColor = "#E4D9E9"
      textColor = "#000"
      break
    }
    case TagColorsEnum.brown: {
      backgroundColor = "#F2E4D4"
      textColor = "#000"
      break
    }
    default: // Do Nothing
  }

  return (
    <Tag style={{ color: textColor, backgroundColor: backgroundColor }}>
      {color}
    </Tag>
  )
}

export { ColorTag }
