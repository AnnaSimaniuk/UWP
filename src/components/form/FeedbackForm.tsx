import { component$ } from "@builder.io/qwik";
import { Chip } from "~/components/ui/chip/Chip";

const SERVICES = [
  "Web Design",
  "Web Development",
  "Mobile App Development",
  "Ecommerce Development",
  "SMM",
  "SEO",
  "PPC",
  "Content Marketing",
];

interface FeedbackFormProps {
  services?: boolean;
}

export const FeedbackForm = component$(
  ({ services = false }: FeedbackFormProps) => {
    return (
      <form class="pb-20 2xl:mr-[78px]">
        <div class="mb-6 flex lg:mb-0 lg:mt-0 lg:gap-[11px]">
          {services && (
            <div class="flex flex-wrap gap-[11px_11px]">
              {SERVICES.map((service) => (
                <Chip label={service} />
              ))}
            </div>
          )}
        </div>
      </form>
    );
  },
);
