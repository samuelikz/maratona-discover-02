<form id="form-profile" method="post" action="/profile"> 
<fieldset>
  <legend>Dados do perfil</legend>
  <div class="separator light"></div>

  <div class="input-group">
    <div class="input-wrapper">
      <label for="name">Nome</label>
      <input type="text" id="name" name="name" value="<%= profile.name %>"/>
    </div>

    <div class="input-wrapper">
      <label for="avatar">Link da foto</label>
      <input 
      placeholder="https://"
      type="url" 
      id="avatar" 
      name="avatar" 
      value="<%= profile.avatar %>"
      />
    </div>
  </div>
</fieldset>

<fieldset>
  <legend>Planejamento</legend>
  <div class="separator light"> </div>

  <div class="input-group">
    <div class="input-wrapper">
      <label for="monthly-budget">Quanto eu <br/>quero ganhar por mês?</label>
      <input 
        type="amount"
        step="0.1" 
        id="monthly-budget" 
        name="monthly-budget" 
        placeholder="R$"
        value='<%= profile["monthly-budget"] %>'/>
    </div>

    <div class="input-wrapper">
      <label for="hours-per-day">Quantas horas <br/>
        quero trabalhar por dia?</label>
      <input 
        type="number"
        id="hours-per-day" 
        name="hours-per-day" 
        value='<%= profile["hours-per-day"] %>'/>
    </div>
  </div>

  <div class="input-group">
    <div class="input-wrapper">
      <label for="days-per-week">Quantos dias <br/>quero
        trabalhar por semana?</label>
      <input
        type="number"
        id="days-per-week" 
        name="days-per-week" 
        value='<%= profile["days-per-week"] %>'/>
    </div>

    <div class="input-wrapper">
      <label for="vacation-per-year">Quantas semanas <br/>
        por ano você quer tirar férias?</label>
      <input 
        type="number" 
        id="vacation-per-year" 
        name="vacation-per-year" 
        value='<%= profile["vacation-per-year"] %>'/>
    </div>
  </div>
</fieldset>

</form>