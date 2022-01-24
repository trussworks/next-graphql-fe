import { Tag } from "@trussworks/react-uswds"
import styles from "./ColorTag.module.scss"
import { TagColorsEnum } from "../../types/enums"

const ColorTag = ({ color }: { color: TagColorsEnum }) => {
  let colorClass = ""
  switch (color) {
    case TagColorsEnum.gray: {
      colorClass = styles.gray
      break;
    }
    case TagColorsEnum.blue: {
      colorClass = styles.blue
      break;
    }
    case TagColorsEnum.purple: {
      colorClass = styles.purple
      break;
    }
    case TagColorsEnum.brown: {
      colorClass = styles.brown
      break;
    }
    default: // do nothing
  }

  return (
    <Tag className={colorClass}>
      {color}
    </Tag>
  )
}

export { ColorTag }
