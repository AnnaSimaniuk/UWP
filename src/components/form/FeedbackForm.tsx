import {
  $,
  component$,
  useContext,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import { Chip } from "~/components/ui/chip/Chip";
import { FeedbackValidationSchema } from "~/tools/validation/feedbackValidation";
import type { z } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import type { SubmitHandler } from "@modular-forms/qwik";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import { useFormLoader } from "~/routes/layout";
import { Input } from "~/components/ui/input/Input";
import { InputFile } from "~/components/ui/input/InputFile";
import { ArrowUpIcon, SpinnerIcon } from "~/assets/icons";
import { Button } from "~/components/ui";
import { useTranslate } from "qwik-speak";
import { PopupProvider } from "~/context/popup-context/PopupProvider";

interface FeedbackFormProps {
  services?: boolean;
  classForm?: string;
}

export type FeedbackFormType = z.infer<typeof FeedbackValidationSchema>;
export const FeedbackForm = component$(
  ({ classForm = "", services = false }: FeedbackFormProps) => {
    const t = useTranslate();
    const servicesList: [string] | string = t("project_form.categories");
    const [feedbackForm, { Form, Field }] = useForm<FeedbackFormType>({
      loader: useFormLoader(),
      validate: zodForm$(FeedbackValidationSchema),
    });
    const { showPopup } = useContext(PopupProvider);
    const file = useStore({
      data: {},
      error: null,
    });
    const loading = useSignal(false);

    const handleSubmit = $<SubmitHandler<FeedbackFormType>>(
      async (values, event) => {
        console.log("values", values);
        console.log(file.data);
        await showPopup();
      },
    );

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
                  {Array.isArray(servicesList) &&
                    servicesList.map((service) => (
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
                  placeholder={t("project_form.fields.placeholder_username")}
                  label={t("project_form.fields.placeholder_username")}
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
                  placeholder={t("project_form.fields.placeholder_email")}
                  label={t("project_form.fields.placeholder_email")}
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
                  placeholder={t("project_form.fields.placeholder_phone")}
                  label={t("project_form.fields.placeholder_phone")}
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
                  placeholder={t("project_form.fields.placeholder_company")}
                  label={t("project_form.fields.placeholder_company")}
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
                placeholder={t("project_form.fields.placeholder_message")}
                label={t("project_form.fields.placeholder_message")}
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
                {t("project_form.terms_description")}
                <Link
                  aria-label={t("project_form.terms_btn_text")}
                  class="pl-[10px] text-xs font-medium leading-4 text-mainTextBlue underline hover:text-linkActive active:text-linkActive"
                  href={t("project_form.terms_href")}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {t("project_form.terms_btn_text")}
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
                {t("project_form.btn_text")}
                {loading ? <ArrowUpIcon /> : <SpinnerIcon />}
              </Button>
              <input type="hidden" name="form" value="form_header" />
            </div>
          </div>
        </div>
      </Form>
    );
  },
);
