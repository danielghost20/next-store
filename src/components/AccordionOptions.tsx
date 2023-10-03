import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionProps = {
  title: string,
  options: string[] | null,
  setValue: (arg: string) => void
}

export default function AccordionOptions({ title, options, setValue }: AccordionProps) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          {
            options?.map(option => (
              <AccordionContent className="cursor-pointer" onClick={() => setValue(option)} key={option}>
                {option}
              </AccordionContent>
            ))
          }
        </AccordionItem>
      </Accordion>
    </>
  );
}
