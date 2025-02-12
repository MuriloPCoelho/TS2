import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({icon}) => {
  return (
    <span className="bg-ts-20 aspect-square rounded-full w-6 inline-flex justify-center items-center">
      <FontAwesomeIcon icon={icon} className="text-xs text-ts-100"/>
    </span>
  )
}

export default Icon