import { html, TemplateResult } from 'lit-html';

const phone = (num :string) :TemplateResult => 
  html`<div style="line-height: 14px;"><a href="tel:${num}" target="_blank" style="font-size: 14px; line-height: 21px; color: #63666a; text-decoration:none;">${num}</a></div>`;

const checkPhone = (data :string) :string|TemplateResult => 
  data.length ? phone(data) : '';

const website = () :TemplateResult => {
  return html`
  <div style="font-size: 14px; line-height: 21px;">
    <a href="https://precisionscience.com/email-signature/url" target="_blank" style="color: #63666a;text-decoration:none;">https://precisionscience.com</a>
  </div>`
}

const logo = () :TemplateResult => {
  return html`
  <div>
  <a href="https://precisionscience.com/email-signature/logo" target="_blank" style="color: #63666a;text-decoration:none;"><img src="https://precisionscience.com/app/themes/PrecisionScience/dist/img/logo-color.svg?v=tm" height="48px" nosend="1"></a>
  </div>`;
}

export const signature = (data :State) :TemplateResult => html`
<div class="gmail_signature" data-smartmail="gmail_signature">
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; font-size: 16px; line-height: 24px; font-weight: normal;">
  <div>
    <span style="font-size: 16px; line-height: 24px; color: #63666a;">${data.firstname}&nbsp;<span style="font-size: 16px; line-height: 24px; color: #63666a;">${data.lastname}</span>
  </div>
  <div style="font-size: 14px; line-height: 21px;">
    <span style="color: #63666a; font-size: 14px; line-height: 21px;">${data.role}</span>
  </div>
  <div style="line-height: 14px;"><br></div>
  <div>
  <div style="font-size: 14px; line-height: 21px;">
    <a href="mailto:${data.email}" target="_blank" style="color: #63666a; font-size: 14px; line-height: 21px; text-decoration:none;">${data.email}</a>
  </div>
  <div style="font-size: 14px; line-height: 21px;">
    ${checkPhone(data.phone)}
  </div>
  <div style="line-height: 28px;"><br></div>
  ${logo()}
  <div style="line-height: 14px;"><br></div>
  ${website()}
</div>
</div>`;