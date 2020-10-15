<template>
  <div
    class="q-pa-md fit row wrap justify-start items-start content-start"
    style="min-width: 400"
  >
    <q-list class="q-mb-md full-width">
      <q-expansion-item
        popup
        default-opened
        icon="mail"
        label="Profile Picture"
        caption="Avatar"
      >
        <q-separator />
        <q-card>
          <q-card-section>
            <q-uploader
              style="max-width: 260px"
              :factory="uploadFile"
              label="Sube una imagen a tu Perfil"
              accept=".jpg, image/*"
              @rejected="onRejected"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <q-list class="q-mb-md full-width">
      <q-expansion-item
        popup
        icon="send"
        label="Email & Username"
        default-opened
        caption="Empty"
      >
        <q-separator />
        <q-card style="max-width:300px">
          <q-card-section>
            <q-input
              filled
              label="username"
              v-model="username"
              :dense="dense"
              disable
            />
            <q-separator style="margin:10px auto"></q-separator>
            <q-input
              filled
              label="email"
              v-model="email"
              :dense="dense"
              disable
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <q-list class="q-mb-md full-width">
      <q-expansion-item
        popup
        icon="drafts"
        label="Password"
        caption="Cambio de password"
        default-opened
      >
        <q-separator />
        <q-card style="max-width:300px">
          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                type="password"
                v-model="currentPassword"
                label="Password Actual"
                :dense="dense"
                stack-label
                lazy-rules
                :rules="[val => val !== '' || 'Please type something']"
              />

              <q-separator style="margin:10px auto"></q-separator>

              <q-input
                filled
                type="password"
                v-model="newPassword"
                label="Nuevo Password"
                :dense="dense"
                stack-label
                lazy-rules
                :rules="[val => val !== '' || 'Please type something']"
              />

              <q-separator style="margin:10px auto"></q-separator>

              <q-input
                filled
                type="password"
                v-model="newPasswordConfirmation"
                label="Confirma tu nuevo Password"
                :dense="dense"
                stack-label
                lazy-rules
                :rules="[val => val !== '' || 'Please type something']"
              />

              <q-separator style="margin:10px auto"></q-separator>

              <div>
                <q-btn
                  rounded
                  size="md"
                  color="deep-purple-13"
                  label="Guardar Cambios"
                  type="submit"
                />
                <q-btn
                  rounded
                  outline
                  size="md"
                  color="deep-purple-13"
                  label="Reset"
                  type="reset"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "@abelcarh",
      email: "abelcarh@gmail.com",
      currentPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
      dense: false
    };
  },
  methods: {
    uploadFile(file) {
      console.log("subiendo");
      console.log(file);
      console.log(typeof file[0]);
    },
    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      });
    },
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted"
      });
      this.currentPassword = null;
      this.newPassword = null;
      this.newPasswordConfirmation = null;
    },

    onReset() {
      this.currentPassword = "";
      this.newPassword = "";
      this.newPasswordConfirmation = "";
    }
  }
};
</script>
<style>
</style>

