import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Categories } from "@/interfaces/product.interface";

type AccordionProps = {
  title: string,
  options: Categories[] | null,
  setValue: (arg: number) => void
}

export default function AccordionOptions({ title, options, setValue }: AccordionProps) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          {
            options?.map(option => (
              <AccordionContent className="cursor-pointer" onClick={() => setValue(option.id)} key={option.id}>
                {option.name}
              </AccordionContent>
            ))
          }
        </AccordionItem>
      </Accordion>
    </>
  );
}
