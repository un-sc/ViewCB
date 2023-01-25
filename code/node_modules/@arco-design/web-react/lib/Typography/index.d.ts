/// <reference types="react" />
import Title from './title';
import Text from './text';
import Paragraph from './paragraph';
declare const Typography: import("react").ForwardRefExoticComponent<import("./interface").TypographyProps & import("react").RefAttributes<unknown>> & {
    Title: typeof Title;
    Text: typeof Text;
    Paragraph: typeof Paragraph;
};
export default Typography;
export { TypographyProps, TypographyTitleProps, TypographyParagraphProps, TypographyTextProps, EllipsisConfig, } from './interface';
