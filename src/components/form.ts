import { html, TemplateResult } from 'lit-html';
import { signature } from '../libs/templates';

const update = (e :UpdateEvent) :void => {
  const event = new CustomEvent('update-data', {
    detail: {
      key: e.target.name,
      value: e.target.value
    }
  });
  document.body.dispatchEvent(event);
};

export const form = (data :State) :TemplateResult => html`
<div class="row">
  <form class="col-12 col-md-6">
    <h4>Your signature details</h4>
    <div class="field-row">
      <label for="firstname">Name</label>
      <input type="text" name="name" 
        @keyup=${e => update(e)}>
    </div>
    <div class="field-row">
      <label for="role">Role</label>
      <input type="text" name="role"
        @keyup=${e => update(e)}>
    </div>
    <div class="field-row">
      <label for="email">Email</label>
      <input type="email" name="email" @keyup=${e => update(e)}>
    </div>
    <div class="field-row">
      <label for="phone">Phone number</label>
      <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        @keyup=${e => update(e)}>
    </div>

  </form>
  <div id="preview" class="col-12 col-md-6">
    <h4>Preview (for copy & paste)</h4>
    ${signature(data)}
  </div>
</div>
  <div id="code">
    <h4>If you email app prefers HTML (for copy & paste)</h4>
    <pre>
      <code></code>
    </pre>
  </code>
`;