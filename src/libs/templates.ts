import { html, TemplateResult } from 'lit-html';

  
const checkName = (name :string) :string|TemplateResult => {
  if (name.length){
    return html`<div>
      <span style="font-size: 16px; line-height: 24px; color: #63666a;">${name}
    </div>`;
  }
}
const checkRole = (role :string) :string|TemplateResult => {
  if (role.length){
    return html`
    <div style="font-size: 14px; line-height: 21px;">
      <span style="color: #63666a; font-size: 14px; line-height: 21px;">${role}</span>
    </div>`;
  }
}

const checkNameDivide = (data) :string|TemplateResult => {
  const hasNameorRole = (data.name.length || data.role.length) ? true :false;
  const hasEmailorPhone = (data.email.length || data.phone.length) ? true :false;
  console.log('email: '+data.email.length);
  if(hasNameorRole && hasEmailorPhone){
    return html`<div style="line-height: 14px;"><br></div>`;
  }
}

const checkEmail = (email :string) :string|TemplateResult => {
  if (email.length){
    return html`
    <div style="font-size: 14px; line-height: 21px;">
      <a href="mailto:${email}" target="_blank" style="color: #63666a; font-size: 14px; line-height: 21px; text-decoration:none;">${email}</a>
    </div>`;
  }
}

const checkPhone = (phone :string) :string|TemplateResult => {
  if (phone.length){
    return html`
    <div style="font-size: 14px; line-height: 21px;">
      <a href="tel:${phone}" target="_blank" style="font-size: 14px; line-height: 21px; color: #63666a; text-decoration:none;">${phone}</a>
    </div>`;
  }
}
const checkLogoDivide = (data) :string|TemplateResult => {
  const hasNameorRole = (data.name.length || data.role.length) ? true :false;
  const hasEmailorPhone = (data.email.length || data.phone.length) ? true :false;
  if(hasNameorRole || hasEmailorPhone){
    return html`<div style="line-height: 28px;"><br></div>`;
  }
}
const logo = () :TemplateResult => {
  return html`
  <div>
  <a href="https://precisionscience.com/email-signature/logo" target="_blank" style="color: #63666a;text-decoration:none;"><img src="https://precisionscience.com/app/themes/PrecisionScience/dist/img/logo-color.svg?v=tm" height="48px" nosend="1"></a>
  </div>`;
}

const website = () :TemplateResult => {
  return html`
  <div style="font-size: 14px; line-height: 21px;">
    <a href="https://precisionscience.com/email-signature/url" target="_blank" style="color: #63666a;text-decoration:none;">https://precisionscience.com</a>
  </div>`;
}

export const signature = (data :State) :TemplateResult => html`
<div class="gmail_signature" data-smartmail="gmail_signature">
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; font-size: 16px; line-height: 24px; font-weight: normal;">  
    ${checkName(data.name)}
    ${checkRole(data.role)}
    ${checkNameDivide(data)}
    ${checkEmail(data.email)}
    ${checkPhone(data.phone)}
    ${checkLogoDivide(data)}
    ${logo()}
    <div style="line-height: 14px;"><br></div>
    ${website()}
  </div>
</div>`;