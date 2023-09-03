import { $, component$, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import { Chip } from "~/components/ui/chip/Chip";
import { FeedbackValidationSchema } from "~/tools/validation/feedbackValidation";
import { Link, z } from "@builder.io/qwik-city";
import { SubmitHandler, useForm, zodForm$ } from "@modular-forms/qwik";
import { useFormLoader } from "~/routes/layout";
import { Input } from "~/components/ui/input/Input";
import { InputFile } from "~/components/ui/input/InputFile";
import { ArrowUpIcon, SpinnerIcon } from "~/assets/icons";
import { Button } from "~/components/ui";
import { Popup } from "~/components/ui/popup/Popup";

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
  classForm?: string;
}

export type FeedbackFormType = z.infer<typeof FeedbackValidationSchema>;
export const FeedbackForm = component$(
  ({ classForm = "", services = false }: FeedbackFormProps) => {
    const [feedbackForm, { Form, Field }] = useForm<FeedbackFormType>({
      loader: useFormLoader(),
      validate: zodForm$(FeedbackValidationSchema),
    });
    const file = useStore({
      data: {},
      error: null,
    });
    const loading = useSignal(false);
    const popupData = useStore({
      open: false,
      heading: "",
      subtitle: "",
      text: "",
      href: "",
    });

    const handleSubmit = $<SubmitHandler<FeedbackFormType>>((values, event) => {
      console.log("values", values);
      console.log(file.data);
      popupData.open = true;
      popupData.heading = "Some text";
      popupData.subtitle = "Some text";
    });

    return (
      <Form class={`pb-20 2xl:mr-[78px] ${classForm}`} onSubmit$={handleSubmit}>
        {services && (
          <div class="mb-6 flex lg:mt-0 lg:gap-[11px] lg:mb-[46px]">
            <Field name={"services"} type={"string[]"}>
              {(field, props) => (
                <div
                  class="flex flex-wrap gap-[11px_11px]"
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  {SERVICES.map((service) => (
                    <Chip label={service} {...props} />
                  ))}
                </div>
              )}
            </Field>
          </div>
        )}
        <div class="flex flex-col">
          <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
            <Field name={"username"} type={"string"}>
              {(field, props) => (
                <Input
                  value={field.value || ""}
                  placeholder={"Name"}
                  label={"Name"}
                  {...props}
                  field={field}
                  type={"text"}
                  id={"username"}
                  required={true}
                />
              )}
            </Field>
            <Field name={"email"} type={"string"}>
              {(field, props) => (
                <Input
                  value={field.value || ""}
                  placeholder={"Email"}
                  label={"Email"}
                  {...props}
                  field={field}
                  type={"text"}
                  required={true}
                />
              )}
            </Field>
            <Field name={"phone"} type={"string"}>
              {(field, props) => (
                <Input
                  value={field.value || ""}
                  placeholder={"Phone"}
                  label={"Phone"}
                  {...props}
                  field={field}
                  type={"tel"}
                  required={true}
                />
              )}
            </Field>
            <Field name={"company"} type={"string"}>
              {(field, props) => (
                <Input
                  value={field.value || ""}
                  placeholder={"Company"}
                  label={"Company"}
                  {...props}
                  field={field}
                  type={"text"}
                  required={true}
                />
              )}
            </Field>
          </div>
          <Field name={"message"} type={"string"}>
            {(field, props) => (
              <Input
                value={field.value || ""}
                placeholder={"Message"}
                label={"Message"}
                {...props}
                field={field}
                type={"text"}
                required={false}
              />
            )}
          </Field>
          <InputFile file={file} />
          <div class="lg:flex lg:justify-between">
            <div class="pr-[10px] lg:w-[380px]">
              <p
                data-nosnippet={true}
                class="py-[24px] text-xs font-medium leading-4 text-middleGrey lg:pb-0"
              >
                By submitting this form you agree to our Privacy Policy and
                allow us to contact you regarding your enquiry
                <Link
                  aria-label="read-more"
                  class="pl-[10px] text-xs font-medium leading-4 text-mainTextBlue underline hover:text-linkActive active:text-linkActive"
                  href="{link_href}"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Read more
                </Link>
              </p>
            </div>
            <div class="group">
              <Button
                aria-label="submit"
                id="submit"
                type="submit"
                variant={"submit"}
              >
                Sent
                {loading ? <ArrowUpIcon /> : <SpinnerIcon />}
              </Button>
              <input type="hidden" name="form" value="form_header" />
            </div>
          </div>
        </div>
        <Popup
          href={popupData.href}
          heading={popupData.heading}
          open={popupData.open}
          subtitle={popupData.subtitle}
          text={popupData.text}
        />
      </Form>
    );
  },
);
