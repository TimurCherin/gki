<template>
    <div>Home Page</div>
</template>

<script>
export default {
  data: () => ({
    vueform: {
      size: 'md',
      displayErrors: false,
      schema: {
        h1: {
          type: 'static',
          tag: 'h1',
          content: 'Hello, Admin',
        },
        divider: {
          type: 'static',
          tag: 'hr',
        },
        p: {
          type: 'static',
          tag: 'p',
          content: 'Рады видеть вас в нашей системе. Ваша роль - ключевое звено в обеспечении эффективной работы нашего сервиса. С помощью вашего вклада мы уверены, что сможем обеспечить высокий уровень сервиса для всех наших пользователей. Пожалуйста, не стесняйтесь обращаться к нам с вопросами или предложениями. Вместе мы сделаем наш продукт еще лучше!',
        },
      },
    },
  }),
};
</script>
