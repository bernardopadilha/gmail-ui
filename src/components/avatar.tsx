import { Image, ImageProps } from "react-native"
import clsx from 'clsx'

interface AvatarProps extends ImageProps {
  size?: "sm" | "md"
} 

export function Avatar({size = "md", ...rest} : AvatarProps) {
  return (
    <Image className={clsx("rounded-full", {
      "w-8 h-8 " : size === "sm",
      "w-10 h-10" : size === "md",
    })} {...rest} />
  )
  }