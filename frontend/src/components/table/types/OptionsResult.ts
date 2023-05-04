import { Ref } from 'vue';
import { ApolloError } from '@apollo/client/core';


export interface OptionsResult {
  options: Ref<any[]>;
  loading: Ref<boolean>;
  error: Ref<ApolloError | null>;
}
