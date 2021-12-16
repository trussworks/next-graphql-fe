import { Tag } from "@trussworks/react-uswds"

const ColorTag = ({ color }: { color: string }) => {
  let backgroundColor, textColor
  switch (color) {
    case "gray": {
      backgroundColor = "#3D4551"
      textColor = "#FFF"
      break
    }
    case "blue": {
      backgroundColor = "#73B3E7"
      textColor = "#FFF"
      break
    }
    case "purple": {
      backgroundColor = "#E4D9E9"
      textColor = "#000"
      break
    }
    case "brown": {
      backgroundColor = "#F2E4D4"
      textColor = "#000"
      break
    }
    default: {
      backgroundColor = "#3D4551"
      textColor = "#FFF"
      break
    }
  }

  return (
    <Tag style={{ color: textColor, backgroundColor: backgroundColor }}>
      {color}
    </Tag>
  )
}

export { ColorTag }
